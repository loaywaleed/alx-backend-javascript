import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then(
    (response) => response.map(({ status, value, reason }) => ({
      status,
      value: () => {
        if (status === 'fulfilled') {
          return value;
        } else {
          return reason.toString();
        }
      },
    })),
  );
}
