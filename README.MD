# sqitch
sqitch add users -n 'users'
sqitch deploy --verify db:pg:goremotedev -h localhost -d goremotedev -u ibraimdev
password is in ~/.pgpass