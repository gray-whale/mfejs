import * as execa from 'execa';

export interface IGitInfo {
  username: string;
  email: string;
}

const getGitInfo = async (): Promise<IGitInfo> => {
  try {
    const [{ stdout: username }, { stdout: email }] = await Promise.all([
      execa.command('git config --global user.name'),
      execa.command('git config --global user.email'),
    ]);
    return { username, email };
  } catch (e) {
    return {
      username: '',
      email: '',
    };
  }
};

export default getGitInfo;
