import axios from 'axios';
import api from '../services/api';

class UserListControllers {
  async get(req, res) {
    const { since } = req.query;
    const limit = 5;
    const startIndex = (since - 1) * limit;
    const endIndex = since * limit;

    const response = await axios({
      method: 'get',
      url: `${api.url}`,
      params: { since },
    })
      .then((response) => response.data)
      .catch((response) => console.log(response));

    const result = response.slice(startIndex, endIndex);

    return res.json(result);
  }
}

export default new UserListControllers();
