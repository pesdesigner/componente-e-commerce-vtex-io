interface SuportProps {}

const Suport: StorefrontFunctionComponent<SuportProps> = ({}) => {

    let url="https://api.whatsapp.com/send?phone=555511964335064&text=Para%20falar%20com%20a%20Gabi.%20Clique%20enviar%20------------%20*D%C3%BAvida%20sobre%3A*";

  return (
    <div>
    <a href={url}>Fale Conosco!</a>
   </div>
  )
}

Suport.schema = {
  title: 'editor.Suport.title',
  description: 'editor.Suport.description',
  type: 'object',
  properties: {},
}

export default Suport