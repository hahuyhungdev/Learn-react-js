import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
//export asyn function getStaticPaths
export async function getStaticPaths() {
  // fetch data from an API flitter _id
  const client = await MongoClient.connect(
    "mongodb+srv://huyhung:hung2503@cluster0.moxmi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  //return an array of paths
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

//export asyn function getStaticProps
export async function getStaticProps(context) {
  //fetch data for single meetup
  const meetupId = context.params.meetupId;
  // fetch data from an API flitter _id
  const client = await MongoClient.connect(
    "mongodb+srv://huyhung:hung2503@cluster0.moxmi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId), //flitter _id,
  });
  client.close();
  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
