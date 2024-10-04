import moment from "moment";

const timeAndDate = (input) => {
  const a = moment(input).fromNow();
  //   const fullDateAndTime = new Date(posts.createdAt).toString();
  //   const dateAndTime = fullDateAndTime.split(" GMT")[0];
  //   const tIndex = dateAndTime.lastIndexOf(" ");
  //   const fullDate = dateAndTime.slice(0, tIndex);
  //   const fullTime = dateAndTime.slice(tIndex + 1, dateAndTime.length);
  //   const time = fullTime.split(":")[0] + ":" + fullTime.split(":")[1];
  //   const date =
  //     fullDate.split(" ")[1] +
  //     " " +
  //     fullDate.split(" ")[2] +
  //     " " +
  //     fullDate.split(" ")[3];
  //   console.log(date);
  //   console.log(time);
  console.log(a);
  return a;
};

export default timeAndDate;
