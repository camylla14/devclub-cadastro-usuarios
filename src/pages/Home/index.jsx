import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from './styles'

import UsersImage from '../../assets/users.png'

function Home() {

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
              <Input type='text' placeholder='Nome do Usuário' />
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' />
            </div>

        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' />
        </div>


        <Button>Cadastrar Usuários</Button>
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