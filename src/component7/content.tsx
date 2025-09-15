        import React,{useState} from 'react'
 
        const Content = () => {
        const[name,setName]=useState();
        const [age,setAge]=useState(null);
        const [education,setEducation]=useState();
        let [jobs,setJobs] = useState([]);
          return (
            <>
            <div>content</div>
            <input type="text" onChange={(e)=>setName(e.currentTarget.value)} className="form-control"/>
            <p>hello world {name}</p>
            <label htmlFor="" className="form-label" >age</label>
            <select name="" id="" onChange={(e)=>setAge(e.target.value)} value={age} className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option value="">select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>age:{age}</p>
            <label htmlFor="" className="form-label">
            
            <input type="radio" name="education" id="" onChange={(e)=>setEducation(e.target.value)} value="degree" />
            
            <label htmlFor="" className="form-label" value="degree">degree</label>
            </label>
            <br />
            <label htmlFor="" className="form-label">
            <input type="radio" name="education" id="" onChange={(e)=>setEducation(e.target.value)} value="master" />
            <label htmlFor="" className="form-label" value="master">master</label>
            </label>
            <br />
            <label htmlFor="" className="form-label">
            <input type="radio" name="education" id="" onChange={(e)=>setEducation(e.target.value)} value="phd" />
            <label htmlFor="" className="form-label" value="phd">phd</label>
            </label>    
            <br />
            <label htmlFor="" className="form-label">
            <input type="radio" name="education" id="" onChange={(e)=>setEducation(e.target.value)} value="other"/>
            <label htmlFor="" className="form-label" value="other">other</label>
            </label>
            <br />
            <p>education:{education} </p>
           
    
        <label htmlFor="jobs">
           <input type="checkbox" name="jobs" id="job1" onChange={(e)=>setJobs([...jobs,e.target.value])} value="job1" />
           <label htmlFor="job1">job1</label></label>
           <br />
           <label htmlFor="jobs">
           <input type="checkbox" name="jobs" id="job2" onChange={(e)=>setJobs([...jobs,e.target.value])} value="job2" />
           <label htmlFor="job2">job2</label></label>
           <br />
           <label htmlFor="jobs">
           <input type="checkbox" name="jobs" id="job3" onChange={(e)=>setJobs([...jobs,e.target.value])} value="job3" />
           <label htmlFor="job3">job3</label></label>
           <br />
           <label htmlFor="jobs">
           <input type="checkbox" name="jobs" id="job4" onChange={(e)=>setJobs([...jobs,e.target.value])} value="job4" />
           <label htmlFor="job4">job4</label></label>
           <br />
 
           <ul>{jobs.map((job,index)=> <li key={index}>{job} <button onClick={((e)=>setJobs(jobs.filter((j,index)=>j!==job)))}>delete</button></li>)}</ul>
           
           
            <button className="btn btn-primary">Submit</button>  
            </>
          )
        }
        
        export default Content
        