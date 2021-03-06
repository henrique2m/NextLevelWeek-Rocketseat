import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number,
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string,
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return(
    <main>
        <article className="teacher-item">
            <header>
              <img src={teacher.avatar} alt={teacher.name}/>
              <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
              </div>
            </header>

            <p>
            {teacher.bio}
            </p>

            <footer>
              <p> 
                preço/hora
                <strong>
                {teacher.cost}
                </strong> 
              </p>

              <a 
                href={`https://wa.me/${teacher.whatsapp}`} 
                target='self'
                onClick={createNewConnection}
              >
                <button type="button">
                <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
              </button>
              </a>
              
              
            </footer>
        </article>
      </main>
  )
}

export default TeacherItem;
