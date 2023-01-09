echo “Deploying file to server…

rsync -av --progress --exclude="node_modules" * root@172.104.162.140:/var/www/html/website/ecommerce-perfume
echo “Done !”