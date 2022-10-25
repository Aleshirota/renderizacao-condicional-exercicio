import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaCadastroEndereço(props) {
  return (
    <FormContainer>
      <h1>Cadastro Endereço </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Numero de residencia:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}>Proxima pagina</SendButton>
        
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereço;
