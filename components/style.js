import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  superior: {
    fontSize: 33,
    fontWeigth: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#f4f5f9',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRigth: 10,
    paddingTop: 25,
  },
  item: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRigth: 10,
    paddingTop: 10,
    marginBottom: 10,
    marginRigth: 10,
    marginTop: 10,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default styles;