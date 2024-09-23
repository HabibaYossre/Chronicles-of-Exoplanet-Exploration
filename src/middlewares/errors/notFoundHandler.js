const handleAPINotFound = (req, res) => {
    res.status(404).send({ message: "API Not found", body: null, status: 404 });
};

export default handleAPINotFound;