#!/usr/bin/bash

HOST=citrus.zgp.org
DESTPATH=/var/www/aloodo

cd `dirname "$BASH_SOURCE"`
ssh $HOST mkdir -p $DESTPATH
mkdir -p public/privacy
mkdir -p public/protection
mkdir -p public/publishers
mkdir -p public/sites
cp -a public/privacy-policy/* public/privacy
cp -a public/tracking-protection/* public/protection
cp -a public/aloodo-for-web-publishers/* public/publishers
cp -a public/aloodo-for-web-sites/* public/sites
rsync --delete -rv public/ $HOST:$DESTPATH
for file in `ls conf`; do
	scp conf/$file $HOST:/etc/apache2/sites-available
	ssh $HOST sudo a2ensite $file
done
ssh $HOST sudo service apache2 restart
