import Loki from 'lokijs'
// db 句柄
export const db = new Loki('notes',{
  autoload:true,
  autoloadCallback:databaseInitialize,
  autosave:true,
  autosaveInterval:3000,
  persistenceMethod:'localStorage'
});
function databaseInitialize() {
  const notes = db.getCollection('notes');
  if(notes == null){
    db.addCollection('notes');
  }
}
export function loadCollection(collection){
  return new Promise((resolve)=>{
    db.loadDatabase({},()=>{
      const _collection = 
      db.getCollection(collection);
      resolve(_collection);
    })
  })
}