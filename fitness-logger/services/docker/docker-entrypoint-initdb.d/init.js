db = db.getSiblingDB('fl-auth');
db.createUser(
{
  user: 'fl-auth',
  pwd: 'fl-auth123', 
  roles: [
    { role: 'readWrite', db: 'fl-auth' }
  ]
});

db = db.getSiblingDB('fl-tp-types');
db.createUser(
{
  user: 'fl-tp-types',
  pwd: 'fl-tp-types123', 
  roles: [
    { role: 'readWrite', db: 'fl-tp-types' }
  ]
});

db = db.getSiblingDB('fl-tp');
db.createUser(
{
  user: 'fl-tp',
  pwd: 'fl-tp',
  roles: [
    { role: 'readWrite', db: 'fl-tp' }
  ]
});

