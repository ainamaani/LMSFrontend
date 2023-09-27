import { Button, TextField,  Typography, makeStyles} from "@material-ui/core";
import React,{useState,useEffect} from 'react';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block"
    },
    textArea: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
        
    }
})

const AddBook = ():JSX.Element => {
    const classes = useStyles();
    const minValue = 1;
    const [title,setTitle] = useState<string>('');
    const [author,setAuthor] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [category,setCategory] = useState<string>('');
    const [publicationDate,setPublicationDate] = useState<Date | null>(null);
    const [publisher,setPublisher] = useState<string>('');
    const [edition,setEdition] = useState<number | null>(1);
    const [language,setLanguage] = useState<string>('');
    const [numberOfPages,setNumberOfPages] = useState<number | null>(null);
    const [numberOfCopies,setNumberOfCopies] = useState<number | null>(null);

    const handleAddBook = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(title,author,description,
            publicationDate,category,publisher,
            edition,language,numberOfCopies,numberOfPages);
    }
    
    return (   
        <div>
            <Typography variant="h5">
                Add book
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleAddBook}>
                <TextField className={classes.field}
                 label="Book title" variant="outlined" 
                 fullWidth required 
                 value={title}
                 onChange={(e)=>{setTitle(e.target.value)}}
                 />
                <TextField className={classes.field}
                 label="Book author" variant="outlined" 
                 fullWidth required
                 value={author}
                 onChange={(e)=>{setAuthor(e.target.value)}}
                 />
                <TextField className={classes.textArea}
                 label="Book description" 
                 variant="outlined" 
                 fullWidth required
                 value={description}
                 onChange={(e)=>{setDescription(e.target.value)}}
                 />
                <TextField className={classes.field}
                 label="Book category" variant="outlined" 
                 fullWidth required
                 value={category}
                 onChange={(e)=>{setCategory(e.target.value)}}
                 />
                <TextField className={classes.field}
                 label="Publication date" variant="outlined" type="date"
                 InputLabelProps={{
                    shrink: true,
                  }}
                  
                 fullWidth required
                 value={publicationDate}
                 onChange={(e)=>{
                    const inputDate = e.target.value;
                    const parsedDate = inputDate ? new Date(inputDate) : null;
                    setPublicationDate(parsedDate);
                }}
                 />
                <TextField className={classes.field}
                 label="Publisher" variant="outlined" 
                 fullWidth required
                 value={publisher}
                 onChange={(e)=>{setPublisher(e.target.value)}}
                 />
                <TextField className={classes.field}
                 label="Edition" type="number" 
                 defaultValue={minValue} variant="outlined" 
                 inputProps={{
                    min: minValue
                 }}
                 fullWidth required
                 value={edition}
                 onChange={(e)=>{
                    const inputEdition = e.target.value;
                    const parsedEdition = inputEdition === "" ? null : parseInt(inputEdition);
                    setEdition(parsedEdition);
                }}
                 />
                <TextField className={classes.field}
                 label="Language" variant="outlined" 
                 fullWidth required
                 value={language}
                 onChange={(e)=>{setLanguage(e.target.value)}}
                 />
                <TextField className={classes.field}
                 label="Number of pages" variant="outlined"
                 inputProps={{
                    min: minValue
                 }}
                 fullWidth required
                 value={numberOfPages}
                 onChange={(e)=>{
                    const inputNumberOfPages = e.target.value;
                    const parsedNumberOfPages = inputNumberOfPages ? null : parseInt(inputNumberOfPages);
                    setNumberOfPages(parsedNumberOfPages);
                }}
                 />
                <TextField className={classes.field}
                 label="Number of copies" variant="outlined" 
                 inputProps={{
                    min: minValue
                 }}
                 fullWidth required
                 value={numberOfCopies}
                 onChange={(e)=>{
                    const inputNumberOfCopies = e.target.value;
                    const parsedNumberOfCopies = inputNumberOfCopies ? null : parseInt(inputNumberOfCopies);
                    setNumberOfCopies(parsedNumberOfCopies);
                }}
                 />

                <Button 
                color="primary"
                variant="contained"
                >Add Book</Button>
                
            </form>
        </div>
     );
}
 
export default AddBook;