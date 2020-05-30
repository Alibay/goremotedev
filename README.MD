# create db
sudo -u postgres psql
CREATE DATABASE goremotedev WITH OWNER = {username} ENCODING = 'UTF8';
GRANT ALL PRIVILEGES ON DATABASE goremotedev TO {username};

# sqitch

## install
apt install sqitch

## init
cd database
sqitch init goremotedev ( already done )

## postgres credentials file
password is in ~/.pgpass
localhost:5432:goremotedev:{username}:{passoword}

## create a migration
cd database
sqitch add {migration_file_name} -n '{migration description}'

## run migrations
cd database
sqitch deploy --verify db:pg:goremotedev -h localhost -d goremotedev -u ibraimdev