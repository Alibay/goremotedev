# install and run the project
npm i
npm run build
npm run start

# create db
~~~
sudo -u postgres psql

CREATE USER goremotedevuser WITH PASSWORD 'secret';

CREATE DATABASE goremotedev WITH OWNER = goremotedevuser ENCODING = 'UTF8';

GRANT ALL PRIVILEGES ON DATABASE goremotedev TO goremotedevuser;
~~~
# sqitch migrations

### install
apt install sqitch

### init
cd database

sqitch init goremotedev ( already done )

### postgres credentials file
password is in ~/.pgpass

localhost:5432:goremotedev:goremotedevuser:secret

### create a migration
cd database
sqitch add {migration_file_name} -n '{migration description}'

### run migrations
cd database
sqitch deploy --verify db:pg:goremotedev -h localhost -d goremotedev -u goremotedevuser