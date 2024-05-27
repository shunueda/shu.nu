export const liSchemaKeys = {
  profile: `*profile`,
  certificates: `*certificationView`,
  education: `*educationView`,
  workPositions: `*positionView`,
  workPositionGroups: `*positionGroupView`,
  skills: `*skillView`,
  projects: `*projectView`,
  attachments: `*summaryTreasuryMedias`,
  volunteerWork: `*volunteerExperienceView`,
  awards: `*honorView`,
  publications: `*publicationView`
}

export const liTypeMappings = {
  profile: {
    tocKeys: [`*profile`],
    types: [
      `com.linkedin.voyager.identity.profile.Profile`,
      `com.linkedin.voyager.dash.identity.profile.Profile`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities`
    ]
  },
  languages: {
    tocKeys: [`*languageView`, `*profileLanguages`],
    types: [`com.linkedin.voyager.identity.profile.Language`]
  },
  certificates: {
    tocKeys: [`*certificationView`, `*profileCertifications`],
    types: [`com.linkedin.voyager.dash.identity.profile.Certification`],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertification`
    ]
  },
  education: {
    tocKeys: [`*educationView`, `*profileEducations`],
    types: [
      `com.linkedin.voyager.identity.profile.Education`,
      `com.linkedin.voyager.dash.identity.profile.Education`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducation`
    ]
  },
  courses: {
    tocKeys: [`*courseView`, `*profileCourses`],
    types: [
      `com.linkedin.voyager.identity.profile.Course`,
      `com.linkedin.voyager.dash.identity.profile.Course`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileCourse`
    ]
  },
  workPositions: {
    tocKeys: [`*positionView`],
    types: [
      `com.linkedin.voyager.identity.profile.Position`,
      `com.linkedin.voyager.dash.identity.profile.Position`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition`
    ]
  },
  workPositionGroups: {
    tocKeys: [`*positionGroupView`, `*profilePositionGroups`],
    types: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroupsInjection`
    ],
    recipes: [
      `com.linkedin.voyager.identity.profile.PositionGroupView`,
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup`,
      `com.linkedin.restli.common.CollectionResponse`
    ]
  },
  skills: {
    tocKeys: [`*skillView`, `*profileSkills`],
    types: [
      `com.linkedin.voyager.identity.profile.Skill`,
      `com.linkedin.voyager.dash.identity.profile.Skill`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill`
    ]
  },
  projects: {
    tocKeys: [`*projectView`, `*profileProjects`],
    types: [
      `com.linkedin.voyager.identity.profile.Project`,
      `com.linkedin.voyager.dash.identity.profile.Project`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileProject`
    ]
  },
  attachments: {
    tocKeys: [`*summaryTreasuryMedias`, `*profileTreasuryMediaPosition`],
    types: [
      `com.linkedin.voyager.identity.profile.Certification`,
      `com.linkedin.voyager.dash.identity.profile.treasury.TreasuryMedia`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMedia`
    ]
  },
  volunteerWork: {
    tocKeys: [`*volunteerExperienceView`, `*profileVolunteerExperiences`],
    types: [`com.linkedin.voyager.dash.identity.profile.VolunteerExperience`],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperience`
    ]
  },
  awards: {
    tocKeys: [`*honorView`, `*profileHonors`],
    types: [
      `com.linkedin.voyager.identity.profile.Honor`,
      `com.linkedin.voyager.dash.identity.profile.Honor`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonor`
    ]
  },
  publications: {
    tocKeys: [`*publicationView`, `*profilePublications`],
    types: [
      `com.linkedin.voyager.identity.profile.Publication`,
      `com.linkedin.voyager.dash.identity.profile.Publication`
    ],
    recipes: [
      `com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublication`
    ]
  }
}
