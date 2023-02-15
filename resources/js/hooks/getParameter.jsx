import React from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
} from 'react-router-dom';

export default function UrlParameter(){
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const parameters = [location, params, navigate];
    return parameters;
}
