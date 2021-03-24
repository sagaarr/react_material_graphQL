export interface CompanyInfoState {
    data:{
        company:{
            summary:string;
             ceo:string;
             coo:string;
             cto_propulsion:string;
             employees:number;
             founded:number;
             founder:string;
             headquarters:{
               address:string;
               city:string;
               state:string;
             }
             launch_sites:string;
             links:{
               elon_twitter:string;
               flickr:string;
               twitter:string;
               website:string;
             }
           }
    }
}


export interface RoadsterInfoState {
    data:{
        roadster:{
            details:string;
            earth_distance_km:number;
            name:string;
            launch_date_utc:string;
            launch_mass_kg:number;
            wikipedia:string;
        }
    }
}