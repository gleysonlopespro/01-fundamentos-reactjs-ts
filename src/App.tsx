import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts=[
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/gleysonlopespro.png',
      name: 'Gleyson Lopes',
      role: 'Developer Web @freela'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'gleyson.dev/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'Diego.dev/doctorcare'}
    ],
    publishedAt: new Date('2023-01-17 09:00:00'),
  },
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {
            posts.map(post => {
                return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
            })}
        </main>
      </div>
    </div>
  )
}

export default App
