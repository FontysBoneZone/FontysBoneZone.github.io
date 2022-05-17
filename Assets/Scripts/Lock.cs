using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lock : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.tag == "Player")
        {
            PlayerInvertory inventory = collision.GetComponent<PlayerInvertory>();

            if (inventory.ConsumeKey())
            {
                Destroy(gameObject);
            }
        }
    }
}
