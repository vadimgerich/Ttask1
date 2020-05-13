import Video from "./model"

const videoControler = {
    async delete (req, res) {
        try {
            const video = await Video.findByIdAndDelete(req.params.id);
            if (!video)
                res.status(404).send("Not found");
            res.send(video);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default videoControler;