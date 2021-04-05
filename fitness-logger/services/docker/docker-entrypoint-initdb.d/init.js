db = db.getSiblingDB('fl-auth');
db.createUser(
{
  user: 'fl-auth',
  pwd: 'flAuth123', 
  roles: [
    { role: 'readWrite', db: 'fl-auth' }
  ]
});

db = db.getSiblingDB('fl-tp-types');
db.createUser(
{
  user: 'fl-tp-types',
  pwd: 'flTypes123', 
  roles: [
    { role: 'readWrite', db: 'fl-tp-types' }
  ]
});

db = db.getSiblingDB('fl-tp');
db.createUser(
{
  user: 'fl-tp',
  pwd: 'flTp123',
  roles: [
    { role: 'readWrite', db: 'fl-tp' }
  ]
});

