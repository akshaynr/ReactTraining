import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MovieForm.css';
import { API_URLS, GenresOptions, HTTP_METHODS } from '../../constants/constants';
import MultiSelectField from '../MultiSelectField/MultiSelectField';
import { sendMoviesData } from '../../utils/api.service';
import TextError from '../TextError/TextError';

const MovieForm = ({ movieInfo }) => {
    const initialValues = {
        title: movieInfo?.title || '',
        release_date: movieInfo?.release_date || '',
        poster_path: movieInfo?.poster_path || '',
        vote_average: movieInfo?.vote_average || '',
        genres: movieInfo?.genres || [],
        runtime: movieInfo?.runtime || '',
        overview: movieInfo?.overview || '',
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        release_date: Yup.string().required('Release Date is required'),
        poster_path: Yup.string().required('Poster Path is required'),
        vote_average: Yup.number().required('Vote average is required'),
        genres: Yup.array().min(1, 'Select atleast one Genre'),
        runtime: Yup.number().required('Runtime is required'),
        overview: Yup.string().required('Overview is required'),
    });
 
    const onSubmit = async (values) => {
        let movieData = { ...values, vote_average: Number(values.vote_average), runtime: Number(values.runtime) };
        let method = HTTP_METHODS.POST;

        if (movieInfo?.id) {
            movieData.id =  movieInfo.id;
            method = HTTP_METHODS.PUT;
        }
        const response = await sendMoviesData(API_URLS.getMovies, method, movieData);
        console.log(response);
    };

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            <Form>
                <div className="row">
                    <div className="col-8">
                        <div className="mb-4">
                            <label for="title" className="form-label">Title</label>
                            <Field type="text" className="form-control" id="title" name="title" placeholder="Title" />
                            <ErrorMessage name="title" component={TextError} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4 position-relative">
                            <label for="release_date" className="form-label">Release Date</label>
                            <Field type="text" className="form-control icon-input" id="release_date" name="release_date" placeholder="Select Date" />
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 448 512">
                                    <path fill="#e4534e" d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H312v72H416V192zm0 104H312v80H416V296zm0 112H312v72h72c17.7 0 32-14.3 32-32V408zM280 376V296H168v80H280zM168 408v72H280V408H168zm-32-32V296H32v80H136zM32 408v40c0 17.7 14.3 32 32 32h72V408H32zm0-144H136V192H32v72zm136 0H280V192H168v72zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z" />
                                </svg>
                            </div>
                            <ErrorMessage name="release_date" component={TextError} />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="poster_path" className="form-label">Movie Url</label>
                            <Field type="text" className="form-control" id="poster_path" name="poster_path" placeholder="https://" />
                            <ErrorMessage name="poster_path" component={TextError} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label for="vote_average" className="form-label">Rating</label>
                            <Field type="text" className="form-control" id="vote_average" name="vote_average" placeholder="Rating" />
                            <ErrorMessage name="vote_average" component={TextError} />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label for="genres" className="form-label">Genre</label>
                            <MultiSelectField
                                id="genres"
                                options={GenresOptions}
                                name="genres"
                                labelledBy="Select Genre"
                                disableSearch={true}
                                hasSelectAll={false}
                            />
                            <ErrorMessage name="genres" component={TextError} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label for="runtime" className="form-label">Runtime</label>
                            <Field type="text" className="form-control" id="runtime" name="runtime" placeholder="Runtime" />
                            <ErrorMessage name="runtime" component={TextError} />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mb-3">
                            <label for="overview" className="form-label">Overview</label>
                            <Field as='textarea' className="form-control" id="overview" name="overview" rows="4" />
                            <ErrorMessage name="overview" component={TextError} />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end gap-3">
                        <button type="reset" className="btn btn-secondary">Reset</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default MovieForm;