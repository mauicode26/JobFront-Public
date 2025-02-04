import { createContext, useState } from "react";
import { StyleSheet } from "react-native";

const initialFeedContextState = {
  filters: {
    location: {
      city: '',
      state: '',
      country: '',
    },
    experience: '',
    jobType: '',
    jobTitle: '',
  },
}

const FeedContext = createContext({
  ...initialFeedContextState,
  setFilters: (filters: any) => {},
})


export const FeedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialFeedContextState);

  const setFilters = (filters: any) => {
    setState(prevState => ({ ...prevState, filters }));
  };

  return (
    <FeedContext.Provider value={{ ...state, setFilters }}>
      {children}
    </FeedContext.Provider>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  navBar: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  contentWrapper: {
    width: '100%',
    padding: 20,
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
