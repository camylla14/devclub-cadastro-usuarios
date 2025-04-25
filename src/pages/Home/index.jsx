import { useRef } from 'react'
import api from '../../services/api'


import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
} from './styles'

import UsersImage from '../../assets/users.png'
import Button from '../../components/Button'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem-usuarios' />
      </TopBackground>


      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
            </div>

        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
        </div>


        <Button type='button' onClick={registerNewUser}>Cadastrar Usuários</Button>
      </Form>
    </Container>
  )
}

export default Home

/*
dois jeitos de exportar

exportar "padrão" -> exporta uma coisa só por pagina
apenas exportar -> exportar duas coisas (colocando um "export" na frente da função)

*/