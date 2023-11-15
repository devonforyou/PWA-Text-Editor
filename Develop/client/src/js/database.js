import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// add content to DB
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = await store.put({ id: "1", content: content });
  await tx.done;
  console.log(request)
  return request;
  }
  
  // get content from DB
  export const getDb = async () => {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = await store.get("1");
    await tx.done;
    console.log(request ? 'IndexedDB data found' : 'No IndexedDB data found')
    console.log(request)
    return request;
  };

initdb();
