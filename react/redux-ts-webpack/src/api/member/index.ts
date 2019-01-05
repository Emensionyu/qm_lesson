import { MemberEntity } from '../../model';
import { members } from './mockData';
let mockMembers = members;

// 组件划分的粒度， 循环，每个都可以做一个组件
// 函数式组件  <Prop>({member})  
const baseURL = 'https://api.github.com/orgs/lemoncode'; 

// 生命周期中， thenable  函数的类型
const fecthMembers = () :Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}

const fecthMembersAsync = ():Promise <MemberEntity[]> =>  {
  const membersURL = `${baseURL}/members`;
  return fetch(membersURL)
    .then(response => response.json())
    .then(mapToMembers);
}
// 数据any 转化成 MemberEntity 
const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
  return githubMembers.map(mapToMember);
}

const mapToMember = (githubMember): MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  }
}
 
const saveMember = (member: MemberEntity): Promise<boolean> => {
  const index = mockMembers.findIndex(m => m.id === member.id);

  index >= 0 ?
    updateMember(member, index) :
    insertMember(member);

  return Promise.resolve(true);
};

const updateMember = (member: MemberEntity, index: number) => {
  mockMembers = [
    ...mockMembers.slice(0, index),
    member,
    ...mockMembers.slice(index + 1),
  ];
};

const insertMember = (member: MemberEntity) => {
  member.id = mockMembers.length;

  mockMembers = [
    ...mockMembers,
    member,
  ];
};


export const memberAPI = {
  fecthMembersAsync,
  saveMember
}
