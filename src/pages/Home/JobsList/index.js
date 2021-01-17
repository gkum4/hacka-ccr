import React, { useEffect, useState } from 'react';

import { jobsExample } from '../../../utils/sampleData';
import { Container, JobItem } from './styles';

const JobsList = () => {
  const [jobs, setJobs] = useState(jobsExample); //setJobs

  useEffect(() => {
    setJobs(jobsExample);
  }, []);
  
  return (
    <Container>
      {jobs.map(item => (
        <JobItem>
          <h3>{item.company}</h3>
          <h2>{item.name}</h2>
          <div>
            <p>{item.city}</p>
            <span>{item.time}</span>
          </div>
        </JobItem>
      ))}
    </Container>
  );
}

export default JobsList;