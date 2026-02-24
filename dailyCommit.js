import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const git = simpleGit();
const FILE = "./data.json";

const date = moment().format();

jsonfile.writeFile(FILE, { date }, async () => {
  try {
    await git.add(FILE);
    await git.commit(`Daily update: ${date}`);
    await git.push();
  } catch (err) {
    console.error(err);
  }
});