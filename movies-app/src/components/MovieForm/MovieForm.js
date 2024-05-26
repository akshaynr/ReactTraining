import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MovieForm.css';
import { API_URLS, GenresOptions, HTTP_METHODS, FormLabels } from '../../constants/constants';
import MultiSelectField from '../MultiSelectField/MultiSelectField';
import { sendMoviesData } from '../../utils/api.service';
import TextError from '../TextError/TextError';
import calendar from '../../assets/svg/calendar.svg';

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
                            <label htmlFor="title" className="form-label">{FormLabels.title}</label>
                            <Field type="text" className="form-control" id="title" name="title" placeholder="Title" />
                            <ErrorMessage name="title" component={TextError} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4 position-relative">
                            <label htmlFor="release_date" className="form-label">{FormLabels.release_date}</label>
                            <Field type="text" className="form-control icon-input" id="release_date" name="release_date" placeholder="Select Date" />
                            <div className="icon">
                                <img src={calendar} alt="Calendar Icon" />
                            </div>
                            <ErrorMessage name="release_date" component={TextError} />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label htmlFor="poster_path" className="form-label">{FormLabels.url}</label>
                            <Field type="text" className="form-control" id="poster_path" name="poster_path" placeholder="https://" />
                            <ErrorMessage name="poster_path" component={TextError} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mb-4">
                            <label htmlFor="vote_average" className="form-label">{FormLabels.rating}</label>
                            <Field type="text" className="form-control" id="vote_average" name="vote_average" placeholder="Rating" />
                            <ErrorMessage name="vote_average" component={TextError} />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="mb-4">
                            <label htmlFor="genres" className="form-label">{FormLabels.genre}</label>
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
                            <label htmlFor="runtime" className="form-label">{FormLabels.runtime}</label>
                            <Field type="text" className="form-control" id="runtime" name="runtime" placeholder="Runtime" />
                            <ErrorMessage name="runtime" component={TextError} />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="overview" className="form-label">{FormLabels.overview}</label>
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