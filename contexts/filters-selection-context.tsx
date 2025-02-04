import { createContext, useState } from "react";
import { Stage0 } from "../components/filters-selection-screen/stage-0";

export const initialFiltersSelectionContextState = {
  activeStage: 0,
  stages: [
      {
        title: 'Select a state',
        component: Stage0,
      },
      {
        title: 'Select an experience level',
        component: () => <></>,
      },
      {
        title: 'Select a job type',
        component: () => <></>,
      },
      {
        title: 'Select a job title',
        component: () => <></>,
      },
      {
        title: 'Select a location',
        component: () => <></>,
      },
      {
        title: 'Select an industry',
        component: () => <></>,
      },
      {
        title: 'Select a company size',
        component: () => <></>,
      },
      {
        title: 'Select a payrange',
        component: () => <></>,
      },
  ],
  filters: {
    location: {
      city: '',
      state: '',
      country: '',
    },
    experience: '',
    jobType: '',
    jobTitle: '',
  }
}

const FiltersSelectionContext = createContext({
  ...initialFiltersSelectionContextState,
  setActiveStage: (stage: number) => {},
  setFilterLocation: (key: any, value: any) => {},
  setFilterExperience: (value: string) => {},
});

export const FiltersSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialFiltersSelectionContextState);

  const setActiveStage = (activeStage: number) => {
    setState(prevState => ({ ...prevState, activeStage }));
  };


  const setFilterLocation = (key: string, value: string) => {
    console.log(`Setting filter ${key} to ${value}`)
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        location: { ...prevState.filters.location, [key]: value }
      }
    }));
  }

  const setFilterExperience = (value: string) => {
    console.log(`Setting filter experience to ${value}`)
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        experience: value
      }
    }));
  }

  return (
    <FiltersSelectionContext.Provider value={{
      ...state,
      setActiveStage,
      setFilterLocation,
      setFilterExperience
    }}>
      {children}
    </FiltersSelectionContext.Provider>
  );
};

export default FiltersSelectionContext;
