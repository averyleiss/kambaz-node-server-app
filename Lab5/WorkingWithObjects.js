
const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };

const module = {
    id: 'M101',
    name: "Web Development", 
    description: "Introduction to Web Development",
    course: "CS4550",
};



export default function WorkingWithObjects(app) {
    // assignment routes
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:score", (req, res) => {
        assignment.score = parseInt(req.params.score);
        res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:completed", (req, res) => {
        assignment.completed = req.params.completed === "true";
        res.json(assignment);
    });
    
    // module routes
    app.get("/lab5/module", (req, res) => res.json(module));
    app.get("/lab5/module/name", (req, res) => res.json(module.name));
    app.get("/lab5/module/name/:newName", (req, res) => {
      module.name = req.params.newName;
      res.json(module);
    });
    app.get("/lab5/module/description/:newDesc", (req, res) => {
      module.description = req.params.newDesc;
      res.json(module);
    });

    
    
  };
  