import 'devextreme/dist/css/dx.material.orange.light.css';
import './root.component.css';

import { Button } from 'devextreme-react';
import SingleCard from './single-card/single-card';

export default function Root(props) {
  return <section className='app'>
    <SingleCard
      title="Bem-vindo a um sistema feito em arquitetura Micro frontend"
      description="Micro Front-end é um estilo inovador que separa uma aplicação de frente em várias camadas menores, cada uma sendo responsável por um módulo específico da aplicação, normalmente separado por domínios ou contextos de uso, permitindo assim, que diferentes vezes cuidem dessas funcionalidades de forma independente."
    >
      <img className='micro-fe-img' src='https://miro.medium.com/v2/resize:fit:1041/0*GfonlIdBd8PLC6Tp.png'/>

      
    </SingleCard>
  </section>
}
