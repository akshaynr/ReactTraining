import { useState } from 'react';
import './MovieForm.css';

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
        // onSubmit(formData);
        // onClose();
    };

    const resetForm = () => {
        setFormData(movieInfo || {})
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-8">
                        <div className="mb-4">
                            <label for="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" onChange={handleChange} value={formData.title} placeholder="Title" />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4 position-relative">
                            <label for="release_date" className="form-label">Release Date</label>
                            <input type="text" className="form-control icon-input" id="release_date"   onChange={handleChange} name="release_date" value={formData.release_date} placeholder="Select Date" />
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 448 512">
                                    <path fill="#e4534e" d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H312v72H416V192zm0 104H312v80H416V296zm0 112H312v72h72c17.7 0 32-14.3 32-32V408zM280 376V296H168v80H280zM168 408v72H280V408H168zm-32-32V296H32v80H136zM32 408v40c0 17.7 14.3 32 32 32h72V408H32zm0-144H136V192H32v72zm136 0H280V192H168v72zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="movie_url" className="form-label">Movie Url</label>
                            <input type="text" className="form-control" id="movie_url" name="poster_path"  onChange={handleChange} value={formData.poster_path} placeholder="https://" />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label for="vote_average" className="form-label">Rating</label>
                            <input type="text" className="form-control" id="vote_average" name="vote_average"  onChange={handleChange} value={formData.vote_average} placeholder="Rating" />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="cat" className="form-label">Genre</label>

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
                            <label for="runtime" className="form-label">Runtime</label>
                            <input type="text" className="form-control" id="runtime"   onChange={handleChange} name="runtime" value={formData.runtime} placeholder="Runtime" />
                        </div>
                    </div>

                    

                    <div className="col-12">
                        <div className="mb-3">
                            <label for="overview" className="form-label">Overview</label>
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