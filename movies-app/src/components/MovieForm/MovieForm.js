import { useState } from 'react';
import './MovieForm.css';
import calendar from '../../assets/svg/calendar.svg';
import { FormLabels } from '../../constants/constants';

const MovieForm = ({ movieInfo }) => {
    const [formData, setFormData] = useState(movieInfo || {});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const resetForm = () => {
        setFormData(movieInfo || {})
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-8">
                        <div className="mb-4">
                            <label for="title" className="form-label">{FormLabels.title}</label>
                            <input type="text" className="form-control" id="title" name="title" onChange={handleChange} value={formData.title} placeholder="Title" />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4 position-relative">
                            <label for="release_date" className="form-label">{FormLabels.release_date}</label>
                            <input type="text" className="form-control icon-input" id="release_date"   onChange={handleChange} name="release_date" value={formData.release_date} placeholder="Select Date" />
                            <div className="icon">
                                <img src={calendar} alt="Calendar Icon" />
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="movie_url" className="form-label">{FormLabels.url}</label>
                            <input type="text" className="form-control" id="movie_url" name="poster_path"  onChange={handleChange} value={formData.poster_path} placeholder="https://" />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label for="vote_average" className="form-label">{FormLabels.rating}</label>
                            <input type="text" className="form-control" id="vote_average" name="vote_average"  onChange={handleChange} value={formData.vote_average} placeholder="Rating" />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="cat" className="form-label">{FormLabels.genre}</label>

                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label for="runtime" className="form-label">{FormLabels.runtime}</label>
                            <input type="text" className="form-control" id="runtime"   onChange={handleChange} name="runtime" value={formData.runtime} placeholder="Runtime" />
                        </div>
                    </div>

                    

                    <div className="col-12">
                        <div className="mb-3">
                            <label for="overview" className="form-label">{FormLabels.overview}</label>
                            <textarea className="form-control" id="overview" name="overview"  onChange={handleChange} value={formData.overview} rows="4"></textarea>
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end gap-3">
                        <button type="button" onClick={resetForm} className="btn btn-secondary">Reset</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
    )
}

export default MovieForm;