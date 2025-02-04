import { faker } from "@faker-js/faker";
import { createContext, useState } from "react";

export type JobListing = {
  id: string
  title: string
  company: string
  summary: string
  description: string
  payrange: {
    min: number
    max: number
  },
  tags?: string[],
  industry?: string,
  creatorId?: string,
  location?: {
    city: string,
    state: string,
    country: string
  }
  techStack?: {
    frontend?: string[],
    backend?: string[],
    databases?: string[],
    devops?: string[],
    cloudPlatforms?: string[]
  },
  avatarUrl?: string
}


const initialActiveJobListingContextState = {
  activeJob: {
    id: '',
    title: '',
    company: '',
    description: '',
    payrange: {
      min: 0,
      max: 0
    },
    tags: [],
    industry: '',
    creatorId: '',
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'United States'
    },
    techStack: {
      frontend: [],
      backend: [],
      databases: [],
      devops: [],
      cloudPlatforms: []
    }
  }
}

export const ActiveJobListingContext = createContext({
  ...initialActiveJobListingContextState,
  setActiveJob: (activeJob: any) => {},
})


export const ActiveJobListingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialActiveJobListingContextState);

  const setActiveJob = (jobListing: any) => {
    setState(prevState => ({ ...prevState, activeJob: jobListing }));
  };

  return (
    <ActiveJobListingContext.Provider value={{ ...state, setActiveJob }}>
      {children}
    </ActiveJobListingContext.Provider>
  )
}
