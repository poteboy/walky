import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import RNLocation, { Location } from 'react-native-location';
RNLocation.configure({
    distanceFilter: 5.0
   })
export default function MapTest(){
    const [geolocation, setGeolocation] = useState<Location | null>();
    const [region, setRegion] = useState<Region>();
    useEffect(()=>{
        const permissionHandle = async () => {

            let permission = await RNLocation.checkPermission({
              ios: 'whenInUse', // or 'always'
            });
            permission = await RNLocation.requestPermission({
                ios: 'whenInUse'
            })
            console.log(permission)
            const location = await RNLocation.getLatestLocation({timeout: 100});
            console.log(location);
            if(location){
                setGeolocation(location);
                setRegion({
                    latitude:location?.latitude,
                    longitude:location?.longitude,
                    latitudeDelta:0.5,
                    longitudeDelta:0.5,
                })
            }
           
          }
          permissionHandle();
    },[])
    
    return(
        <View style={{flex: 1}}>
            <Text>MAP TEST</Text>
        <MapView
            provider={PROVIDER_GOOGLE}
            region={region}
              style={{flex: 1}}
        />
        </View>
        
    )
}