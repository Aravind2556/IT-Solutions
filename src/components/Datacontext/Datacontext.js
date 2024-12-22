import { createContext } from "react";







export const DContext = createContext()
function Datacontext(props) {
  
  const navbar = {

    logo : "logo",
    home : "home",
    services : "services",
    portfolio : "portfolio",
    testimonials : "testimonials",
    team : "team",
    menu : "menu",
    news : "news",
    getquotes : "getquotes"

}

const service = [
  {
    image : "jh",
    topic : "Application Design",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image : "bh",
    topic : "Web Hosting",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image : "jh",
    topic : "Social Media",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image : "hj",
    topic : "SEO Optimization",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image : "jbh",
    topic : "Cloud Server",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image : "kj",
    topic : "Data Secuity",
    content : "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    choose : [
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
      {
        image : "gnkj",
        topic  : "jkdnkj",
        content  :"herjgje"
      },
    ]
  }
]

const portfolio = [
  {
    image : "hfyt"

  },
  {
    image : "hfyt"

  },
  {
    image : "hfyt"

  },
  {
    image : "hfyt"

  },
  {
    image : "hfyt"

  },{
    image : "hfyt"

  },
  {
    pricingplane : [
      {
        bacsic : "bascic",
        amount : "87897",
        space : "jjbd",
        domain : "jhdgsj",
        ssl : "jsdhj",
        backup : "jskdh",
        templete : "sdjvhudc",
        email : "sjbvjhs",
        database : "jfvhgsh",
        unlimitedemail  :"dsbhuj",
        support : "vsgdbvjchs",
        order : "sjvgh"

      },
      {
        bacsic : "bascic",
        amount : "87897",
        space : "jjbd",
        domain : "jhdgsj",
        ssl : "jsdhj",
        backup : "jskdh",
        templete : "sdjvhudc",
        email : "sjbvjhs",
        database : "jfvhgsh",
        unlimitedemail  :"dsbhuj",
        support : "vsgdbvjchs",
        order : "sjvgh"

      },
      {
        bacsic : "bascic",
        amount : "87897",
        space : "jjbd",
        domain : "jhdgsj",
        ssl : "jsdhj",
        backup : "jskdh",
        templete : "sdjvhudc",
        email : "sjbvjhs",
        database : "jfvhgsh",
        unlimitedemail  :"dsbhuj",
        support : "vsgdbvjchs",
        order : "sjvgh"

      },
    ]
  }
]

const client = [
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  },
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  },
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  }

]

   
    
   

    
    


    const data = {navbar,service,portfolio,client}

  return (
    <DContext.Provider value={data}>
        {props.children}
    </DContext.Provider>
  )
}

export default Datacontext
