import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e2d1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#d2cec0',
  },
  backButton: {
    padding: 5,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  noteContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#000',
    marginBottom: 10,
    fontFamily: 'System',
  },
  noteInput: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'System',
    padding: 0,
  },
});

export default styles;