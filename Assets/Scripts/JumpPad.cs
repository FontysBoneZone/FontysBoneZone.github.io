using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class JumpPad : MonoBehaviour
{
    public GameObject spring, sprung;
    public float launchSpeed = 5;
    public float coolDown = 0.5f;
    private void Start()
    {
     
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            if(spring.activeInHierarchy == true)
            {
            collision.GetComponent<Rigidbody2D>().AddForce(new Vector2(0, launchSpeed),ForceMode2D.Impulse);
            }
            spring.SetActive(false);
            sprung.SetActive(true);

            StartCoroutine(WaitForReset(coolDown));
        }
    }
    private IEnumerator WaitForReset(float waitTime)
    {
        yield return new WaitForSeconds(waitTime);
        spring.SetActive(true);
        sprung.SetActive(false);
    }
}
