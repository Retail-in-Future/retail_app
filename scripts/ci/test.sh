#!/bin/bash
#
# set -n   # Uncomment to check script syntax, without execution.
#          # NOTE: Do not forget to put the # comment back in or
#          #       the shell script will never execute!
# set -x   # Uncomment to debug this shell script
#
##########################################################
#         DEFINE FILES AND VARIABLES HERE
##########################################################

this_script=$(basename $0)
top_dir=$(dirname $0)"/../../"
echo -e "$top_dir"

##########################################################
#              DEFINE FUNCTIONS HERE
##########################################################

##########################################################
#               BEGINNING OF MAIN
##########################################################

pushd $top_dir

app_name=$(basename $(pwd))
docker_image_id=`echo "local/${app_name}:latest" | tr "[:upper:]" "[:lower:]"`

docker run -i -e DOCKER_HOST_USERID="$(id -u):$(id -g)" --rm $docker_image_id /bin/bash << "EOF"
set -o errexit -o nounset \
\
&& yarn install \
&& yarn lint \
&& yarn test -- --coverage --verbose\
EOF

popd

# End of script
