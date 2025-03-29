import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E2D3', // Beige/cream background color
  },
  header: {
    height: 56,
    backgroundColor: '#A5B5A6', // Muted green header
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  personContainer: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    marginRight: -20, // Overlap with journal
  },
  personImage: {
    height: 180,
    width: 100,
  },
  journalStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  journalRuler: {
    width: 8,
    height: 180,
    backgroundColor: '#888',
    marginRight: 4,
  },
  journal: {
    width: 120,
    height: 180,
    backgroundColor: '#FFF',
    padding: 16,
    justifyContent: 'center',
  },
  journalLine: {
    height: 16,
    marginVertical: 4,
  },
  journalText: {
    height: 2,
    backgroundColor: '#B8B8B8',
    width: '100%',
  },
  createText: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  fabIcon: {
    fontSize: 32,
    color: '#FFF',
    lineHeight: 32,
  },
});