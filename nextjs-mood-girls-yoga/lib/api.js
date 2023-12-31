async function fetchAPI(query, { variables } = {}, preview) {
    const url = preview
        ? process.env.NEXT_PUBLIC_WEBINY_PREVIEW_API_URL
        : process.env.NEXT_PUBLIC_WEBINY_API_URL;

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_WEBINY_API_SECRET}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }

    return json.data;
}

export async function getAllClassTypes() {
    const data = await fetchAPI(
        `query Classes{
      listClasses {
        data {
          title
          description
          image
          id
        }
      }
  }`,
        {},
        true
    );
    return data.listClasses.data;
}

export async function getAllClasses() {
    const data = await fetchAPI(
        `query ScheduledClasses{
      listScheduledClasss {
          data {
            title
            description
            id
            classType{
              title
            }
            numberOfYouthSpaces
            numberOfParticipants
          }
        }
  }`,
        {},
        true
    );
    console.log(data);
    return data.listScheduledClasss.data;
}

export async function getTestimonials(teenager = false) {
    let key = teenager ? "listTeenagerQuotes" : "listTestimonials";
    const data = await fetchAPI(
        `query Testimonials{
      ${key}{
          data {
            quote
            personName
          }
        }
  }`,
        {},
        true
    );
    return data[key].data;
}

// export async function getAllPostsWithSlug() {
//   const data = await fetchAPI(`
//     query PostSlugs {
//       listPosts {
//         data {
//           slug
//         }
//       }
//     }
//   `)
//   return data?.listPosts.data
// }
//
// export async function getAllPostsForHome(preview) {
//   const data = await fetchAPI(
//       `
//       query Posts {
//         listPosts {
//           data {
//             id
//             title
//             slug
//             description
//             createdOn
//             featuredImage
//             author {
//               name
//               picture
//             }
//           }
//         }
//       }
//     `,
//     {},
//     preview
//   )
//   return data.listPosts.data
// }
//
// export async function getPostBySlug(slug, preview) {
//   const data = await fetchAPI(
//
//     `
//       query PostBySlug( $PostsGetWhereInput: PostsGetWhereInput!) {
//         post: getPosts( where: $PostsGetWhereInput ) {
//           data {
//             id
//             title
//             slug
//             description
//             createdOn
//             featuredImage
//             body
//             author {
//               name
//               picture
//             }
//           }
//         }
//         morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
//           data {
//             id
//             title
//             slug
//             description
//             createdOn
//             featuredImage
//             author {
//               name
//               picture
//
//             }
//           }
//         }
//       }
//     `,
//       {
//         variables: {
//           PostsGetWhereInput:{
//             slug: slug
//           }
//         }
//       },
//       preview
//   )
//   return data
// }
