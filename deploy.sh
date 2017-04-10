#!/usr/bin/bash

HOST=citrus.zgp.org
DESTPATH=/var/www/aloodo

cd `dirname "$BASH_SOURCE"`
ssh $HOST mkdir -p $DESTPATH
rsync --delete -rv public/ $HOST:$DESTPATH
for file in `ls conf`; do
	scp conf/$file $HOST:/etc/apache2/sites-available
	ssh $HOST sudo a2ensite $file
done
ssh $HOST sudo service apache2 reload
