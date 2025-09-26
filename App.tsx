import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { type Meeting } from './src/types/meeting';
import { meetings } from './src/fixtures/meetingsFixtures';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [mtgs, setMtgs] = useState<Meeting[]>([])
  
  const getMeetings = async () => {
    try {
      const res = await fetch("https://ac0d79c9f329.ngrok-free.app/meetings");
      console.log(`${JSON.stringify(res)}`);
      if(res.ok) {
        const data = await res.json();
        setMtgs(data.meetings);
      } else {
        const errorMessage = await res.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      setHasError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    getMeetings();
  }
  

  if (hasError) {
    return (
      <View style={styles.container}>
        <View style={styles.header}/>
        <View style={styles.body}>
          <Text>Error</Text>
        </View>
        <View style={styles.footer}/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.body}>
        <FlatList 
          data={mtgs}
          renderItem={({item}) => <MeetingRow meeting={item}></MeetingRow>}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}/>
    </View>
  );
}

type MeetingRowProps = {
  meeting: Meeting
}

const MeetingRow = (props: MeetingRowProps) => (
  <View style={styles.meeting}>
    <View style={styles.time}>
      <Text>{props.meeting.day}</Text>
      <Text>{props.meeting.time}</Text>
    </View>
    <View>
      <Text style={styles.title}>{props.meeting.name}</Text>
      {props.meeting.modality === "Virtual" ? <Text>Virtual</Text> 
      : <Text>{props.meeting.location.venue}</Text>}
      <Text>{props.meeting.location.city}</Text>
    </View>
    
  </View>
);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    height: 150,
    backgroundColor: "#135991"
  },
  body: {
    flex: 1,
    backgroundColor: "#F5FAFC",
    justifyContent: "space-between"
  },
  meeting: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    borderColor: "#F5FAFC",
    borderWidth: 10,
    backgroundColor: "#15A3D6"
  },
  title: {
    flex: 1,
    alignItems: "flex-start",
    fontSize: 16,
    fontWeight: "bold"
  },
  time: {
    flex: 0,
    width: 75,
    fontSize: 12,
  },
  footer: {
    height: 100,
    backgroundColor: "#6F7375"
  }

})




{/* <Text style={styles.title}>{props.meeting.name}</Text>
      <Text style={{fontSize: 12}}>{props.meeting.location.venue}</Text>
      <Text style={{fontSize: 12}}>{props.meeting.location.street}</Text>
      <Text style={{fontSize: 12}}>{props.meeting.location.city}</Text> */}


/* <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.body}>
        {/* <Button
          title="Change greeting"
          onPress={() => greeting === 'Hello' ? setGreeting('Goodbye') : setGreeting('Hello')} 
        />
        <Greeting name='Andrew' body={greeting}></Greeting> */
    //     <FlatList 
    //       data={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} 
    //       renderItem={({item}) => <Meeting day={item} />}
    //       keyExtractor={item => item}
    //     />
    //   </View>
    //   <View style={styles.footer}>
    //     <Text>Footer</Text>
    //   </View>
      
      
    // </View> */}

    // container: {
    // flex: 1,
  //   justifyContent: 'space-between',
  //   backgroundColor: '#DFEDED'
  // },
  // header: {
  //   flex: 0,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#353FF2',
  //   height: 150
  // },
  // body: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'space-between'
  // },
  // meeting: {
  //   flex: 3,
  //   borderWidth: 5,
  //   borderColor: '#5E5D5C'
  // },
  // footer: {
  //   flex: 0,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   height: 75,
  //   backgroundColor: '#B9B9BD'
  // }

//   const Greeting = (props: GreetingProps) => {
//   return (
//     <View>
//       <Text>{props.body}, {props.name}</Text>
//     </View>
//   );

// }

// type GreetingProps = {
//   name: string;
//   body?: string
// };

// type MeetingProps = {
//   day: string
// }

// const Meeting = (props: MeetingProps) => {
//   return (
//     <View style={styles.meeting}>
//       <Text>{props.day}</Text>
//     </View>
//   )
// }