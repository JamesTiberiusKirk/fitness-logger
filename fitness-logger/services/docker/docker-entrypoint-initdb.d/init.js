db = db.getSiblingDB('fl-auth')
db.createUser(
{
  user: "fl-auth",
  pwd: "fl-auth123", 
  roles: [
    { role: "readWrite", db: "fl-auth" }
  ]
})

db = db.getSiblingDB('fl-tracking-points')

db.createUser(
{
  user: "fl-tracking-points",
  pwd: "fl-tracking-points123", 
  roles: [
    { role: "readWrite", db: "fl-tracking-points" }
  ]
})
