import axios from 'axios';
import api from '../services/api';

class UserReposController {
  async get(req, res) {
    const { username } = req.params;

    const response = await axios({
      method: 'GET',
      url: `${api.url}/${username}/repos`,
    })
      .then((response) => response.data)
      .catch((error) => console.log(error));

    return res.json(response);
  }
}

export default new UserReposController();
