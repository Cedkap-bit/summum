import request, {gql, GraphQLClient} from "graphql-request"

export const getCarsList = async()=>{
    const query =gql `
           query VoitureLists {
                    voitureLists {
                        annee
                        createdAt
                        nom
                        transmission
                        marque
                        id
                        images {
                        fileName
                        url
                        }
                    }
        }
    `
    const  result = await request ('https://us-west-2.cdn.hygraph.com/content/cm8cen0cb07z707wfvqwghnva/master', query);
    return result;
}


export const getCarsID = async(IdCar:string)=>{
    
    const query =gql `
          query MyID {
                    voitureLists(where: {id: "`+IdCar+`"}) {
                    annee
                    createdAt
                    nom
                    transmission
                    marque
                    id
                    images {
                        fileName
                        url
                    }
                    }
                }
    `
    const  result = await request ('https://us-west-2.cdn.hygraph.com/content/cm8cen0cb07z707wfvqwghnva/master', query);
    return result;
}
   

export const getCarsListModele = async()=>{
    const query =gql `
        query MyCarModel {
  modelCarprices {
    createdAt
    description {
      text
    }
    features {
      text
    }
    gallery {
      image {
        id
        url
        fileName
      }
    }
    name
    image {
      fileName
      url
    }
    price
    rating
    safety {
      text
    }
    specification {
      id
      seats
      speed
      year
      fuel
    }
    id
    marque
  }
}
    `
    const  result = await request ('https://us-west-2.cdn.hygraph.com/content/cm8cen0cb07z707wfvqwghnva/master', query);
    return result;

}


export const getCarsModelID = async(IdCar:string)=>{
    
    const query =gql `
          query MyQuery {
  modelCarprice(where: {id: "`+IdCar+`"}) {
    id
    name
    image {
      url
      fileName
    }
    price
    performance {
      acceleration
      engine
      driveTrain
      transmission
    }
    rating
    safety {
      text
    }
    specification {
      fuel
      seats
      speed
      year
    }
    gallery {
      image {
        fileName
        url
      }
    }
    features {
      text
    }
    description {
      text
    }
  }
}
    `
    const  result = await request ('https://us-west-2.cdn.hygraph.com/content/cm8cen0cb07z707wfvqwghnva/master', query);
    return result;
}


